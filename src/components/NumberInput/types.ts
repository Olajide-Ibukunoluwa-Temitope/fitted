export type NumberInputProps = {
    name: string;
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
}