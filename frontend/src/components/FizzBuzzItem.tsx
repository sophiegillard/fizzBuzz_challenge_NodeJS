import type { FizzBuzzItem as FizzBuzzItemType } from "../api";

function getItemClass(item: FizzBuzzItemType): string {
    if (typeof item === "string") {
        const base = "fizzbuzz-item";
        const variant = `fizzbuzz-item--${item.toLowerCase()}`;
        return `${base} ${variant}`;
    }
    return "fizzbuzz-item fizzbuzz-item--number";
}

interface FizzBuzzItemProps {
    item: FizzBuzzItemType;
}

export function FizzBuzzItem({ item }: FizzBuzzItemProps) {
    return <span className={getItemClass(item)}>{item}</span>;
}
