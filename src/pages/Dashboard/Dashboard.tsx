import React, { useEffect, useState } from "react";
import NumberInput from "../../components/NumberInput/NumberInput";
import SelectInput from "../../components/SelectInput/SelectInput";
import TextInput from "../../components/TextInput/TextInput";
import { fetchAcctDetails, fetchBankData } from "../../utilities/fetch";
import { genderOptions, stylesOptions } from "./data";
import "./styles.css";

const Dashboard: React.FC = () => {
  // states
  const [bankDetails, setBankDetails] = useState<{ [key: string]: any }[]>([]);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [failSubmission, setFailSubmission] = useState<boolean>(false);
  const [formData, setFormData] = useState<{ [key: string]: any }>({
    gender: "",
    style: "",
    bankCode: "",
    acctNum: "",
    acctName: "",
    error: false,
  });

  // functions
  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFailSubmission(false);
    setFormData((prevState) => {
      return {
        ...prevState,
        error: false,
        [name]: value,
      };
    });
  };

  const handleSubmit = () => {
    const values = Object.values(formData).map((item) => item);
    const isNotValidated = values.includes("") || values.includes(true) || values.includes("Loading...");
    
    if (!isNotValidated) {
      setIsSubmitted(true);
    } else {
        setFailSubmission(true);
    }
  };

  const handleDisplaySuccessPage = () => {
    return (
        <div className="success">
            <div className="success-img">
              <img
                src={require("../../assets/images/success.png")}
                alt="success"
              />
            </div>
            <div className="success-content">
              <p className="yay">
                <span>Yay!!!</span>
                <span>🎉</span>
              </p>
              <p className="message">
                Your application to become a vetted tailor has been sent, a
                Fitted Agent will get in touch with you regard the next steps.
                Goodluck!
              </p>
            </div>
          </div>
    )
  }

  useEffect(() => {
    fetchBankData(setBankDetails);
  }, []);

  useEffect(() => {
    fetchAcctDetails(formData.bankCode, formData.acctNum, setFormData);
  }, [formData.bankCode, formData.acctNum]);

  return (
    <div className="root">
      <div className="container">
        {isSubmitted ? (
          handleDisplaySuccessPage()
        ) : (
          <>
            <div className="title-container">
              <div className="title-section">
                <h3 className="heading">Vetted Tailor Application</h3>
                <p className="sub-text">
                  One step closer to your goal! Please provide us with your bank
                  details with which you'll be receiving payment
                </p>
                {failSubmission && <p className="errored">*Please fill out all fields correctly</p>}
              </div>
            </div>
            <div className="form-container">
              <div className="form-section">
                <div>
                  <div className="dual-input">
                    <div className="input">
                      <SelectInput
                        name="gender"
                        onChange={handleChange}
                        options={genderOptions}
                        placeholder="Please Select"
                        label="Gender you sew for"
                      />
                    </div>
                    <div className="input">
                      <SelectInput
                        name="style"
                        onChange={handleChange}
                        options={stylesOptions}
                        placeholder="Please Select"
                        label="Styles you sew"
                      />
                    </div>
                  </div>
                  <div>
                    <SelectInput
                      name="bankCode"
                      onChange={handleChange}
                      options={bankDetails}
                      placeholder="Please Select"
                      label="Bank Name"
                    />
                  </div>
                  <div>
                    <NumberInput
                      name={"acctNum"}
                      label={"Account Number"}
                      onChange={handleChange}
                      value={formData.acctNum}
                    />
                  </div>
                  <div>
                    <TextInput
                      name={"acctName"}
                      label={"Account Name"}
                      value={formData.acctName}
                      error={formData.error}
                      errorMessage="Opps, Account details not found"
                    />
                  </div>
                  <div className="btn-container">
                    <button
                      onClick={handleSubmit}
                      type="submit"
                      className="submit-btn"
                    >
                      Submit Application
                    </button>
                  </div>
                </div>
                
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
