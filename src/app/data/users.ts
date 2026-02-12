export type User = {
    id: string;
    name: string;
    age: number;
}

export const users: User[] = [
    { id: "1", name: "Alice", age: 22 },
    { id: "2", name: "Bob", age: 33},
    { id: "3", name: "Charlie", age: 30 }
]