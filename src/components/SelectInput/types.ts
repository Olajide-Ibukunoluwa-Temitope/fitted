export type SelectInputProps = {
    name: string;
    label: string;
    value?: string;
    options: {[key: string]: any}[];
    onChange: (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
    placeholder: string;
}