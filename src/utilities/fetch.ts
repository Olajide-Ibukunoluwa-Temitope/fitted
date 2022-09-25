export const fetchBankData = async (
    setData: React.Dispatch<React.SetStateAction<{[key: string]: any; }[]>>
) => {
    try {
        const rawBankData = await fetch('https://fitted-staging-api.herokuapp.com/api/v1/bank/banks');
        const bankData = await rawBankData.json();
        const formattedBankData = bankData.data.map((bank: {[key: string]: any}) => ({label: bank.name, value: bank.code}))
        setData(formattedBankData)
    } catch (error) {
        throw error
    }
}

export const fetchAcctDetails = async (
    bankCode: string, 
    acctNum: string, 
    setFormData: React.Dispatch<React.SetStateAction<{[key: string]: any; }>>
) => {
    if (bankCode !== '' && acctNum.length >= 10) {
        try {
            setFormData((prevState: {[key: string]:any}) => {
                return {
                    ...prevState,
                    acctName: 'Loading...'
                }
            })
            const form = new URLSearchParams();

            form.append('bankCode', bankCode);
            form.append('accountNo', acctNum);

            const rawAcctData = await fetch('https://fitted-staging-api.herokuapp.com/api/v1/bank/resolveAccount', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: form
            });
            const acctData = await rawAcctData.json()
            if (acctData.status){
                setFormData((prevState: {[key: string]:any}) => {
                    return {
                        ...prevState,
                        acctName: acctData.content.data.account_name
                    }
                })
            } else {
                setFormData((prevState: {[key: string]:any}) => {
                    return {
                        ...prevState,
                        acctName: "",
                        error: true
                    }
                })
            }
        } catch (error) {
            setFormData((prevState: {[key: string]:any}) => {
                return {
                    ...prevState,
                    acctName: "",
                    error: true
                }
            })
        }
        
    }
}