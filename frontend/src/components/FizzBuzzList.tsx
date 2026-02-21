import type { FizzBuzzItem, FizzBuzzResponse } from "../api";
import { FizzBuzzItem as FizzBuzzItemComponent } from "./FizzBuzzItem";

interface FizzBuzzListProps {
    data: FizzBuzzResponse;
}

function isFizzBuzzArray(data: FizzBuzzResponse): data is FizzBuzzItem[] {
    return Array.isArray(data);
}

export function FizzBuzzList({ data }: FizzBuzzListProps) {
    if (!isFizzBuzzArray(data)) {
        return <p className="welcome-message">{data.message}</p>;
    }

    return (
        <div className="fizzbuzz-list">
            {data.map((item, index) => (
                <FizzBuzzItemComponent key={index} item={item} />
            ))}
        </div>
    );
}
