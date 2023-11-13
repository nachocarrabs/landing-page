import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick:
    MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit"
}

export interface SearchPlanProps {
    plan: string
    setPlan: (plan: string) => void
}