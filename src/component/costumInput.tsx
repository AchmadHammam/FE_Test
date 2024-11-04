/* eslint-disable @typescript-eslint/no-explicit-any */
import { HTMLInputTypeAttribute } from "react";

interface ConstumInputType {
  type: HTMLInputTypeAttribute;
  label?: string;
  placeholder: string;
  register: any;
  inputProps: Record<string, any>;
  error?: string;
  width?: string;
  height?: string;
  color?: string;
  value?: string;
  readOnly?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
