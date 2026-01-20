import { ClassNameValue, twMerge } from "tailwind-merge";

export function twCn(...classes: ClassNameValue[]) {
    return twMerge(...classes)
}