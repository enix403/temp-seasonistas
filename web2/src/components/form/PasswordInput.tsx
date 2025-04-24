import { ComponentProps, useId, useState } from "react";
import { CheckIcon, EyeIcon, EyeOffIcon, XIcon } from "lucide-react";

import { Input } from "@/components/ui/input";
import clsx from "clsx";
import { useWatchInput } from "@/hooks/useWatchInput";

/* ============================ */

export function PasswordInput({
  className,
  placeholder = "Password",
  ...inputProps
}: ComponentProps<typeof Input>) {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const toggleVisibility = () => setIsVisible(prevState => !prevState);

  return (
    <div className={clsx("relative", className)}>
      <Input
        {...inputProps}
        placeholder={placeholder}
        className='pe-9'
        type={isVisible ? "text" : "password"}
      />
      <button
        tabIndex={-1}
        className='absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md text-muted-foreground/80 transition-[color,box-shadow] outline-none hover:text-foreground focus:z-10 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50'
        type='button'
        onClick={toggleVisibility}
        aria-label={isVisible ? "Hide password" : "Show password"}
        aria-pressed={isVisible}
        aria-controls='password'
      >
        {isVisible ? (
          <EyeOffIcon size={16} aria-hidden='true' />
        ) : (
          <EyeIcon size={16} aria-hidden='true' />
        )}
      </button>
    </div>
  );
}

/* ============================ */

type PasswordStrengthRequirement = {
  regex: RegExp;
  text: string;
};

export const defaultRequirements: PasswordStrengthRequirement[] = [
  { regex: /.{8,}/, text: "At least 8 characters" },
  { regex: /[0-9]/, text: "At least 1 number" },
  { regex: /[a-z]/, text: "At least 1 lowercase letter" },
  { regex: /[A-Z]/, text: "At least 1 uppercase letter" }
];

export function PasswordInputWithStrength({
  requirements = defaultRequirements,
  className,
  ...inputProps
}: {
  requirements?: PasswordStrengthRequirement[];
} & ComponentProps<typeof PasswordInput>) {
  const id = useId();
  const { value, onChange } = useWatchInput(inputProps);

  const password = typeof value === "string" ? value : "";

  const strength = requirements.map(req => ({
    met: req.regex.test(password ?? ""),
    text: req.text
  }));

  const strengthScore = strength.filter(req => req.met).length;

  // TODO: adapt to different lengths of requirements
  const getStrengthColor = (score: number) => {
    if (score === 0) return "bg-border";
    if (score <= 1) return "bg-red-500";
    if (score <= 2) return "bg-orange-500";
    if (score === 3) return "bg-amber-500";
    return "bg-emerald-500";
  };

  const getStrengthText = (score: number) => {
    if (score === 0) return "Enter a password";
    if (score <= 2) return "Weak password";
    if (score === 3) return "Medium password";
    return "Strong password";
  };

  return (
    <div className={className}>
      <PasswordInput {...inputProps} value={value} onChange={onChange} />

      {/* Password strength indicator */}
      <div
        className='mt-3 mb-4 h-1 w-full overflow-hidden rounded-full bg-border'
        role='progressbar'
        aria-valuenow={strengthScore}
        aria-valuemin={0}
        aria-valuemax={4}
        aria-label='Password strength'
      >
        <div
          className={`h-full ${getStrengthColor(strengthScore)} transition-all duration-500 ease-out`}
          style={{ width: `${(strengthScore / 4) * 100}%` }}
        ></div>
      </div>

      {/* Password strength description */}
      <p
        id={`${id}-description`}
        className='mb-2 text-sm font-medium text-foreground'
      >
        {getStrengthText(strengthScore)}. Must contain:
      </p>

      {/* Password requirements list */}
      <ul className='space-y-1.5' aria-label='Password requirements'>
        {strength.map((req, index) => (
          <li key={index} className='flex items-center gap-2'>
            {req.met ? (
              <CheckIcon
                size={16}
                className='text-emerald-500'
                aria-hidden='true'
              />
            ) : (
              <XIcon
                size={16}
                className='text-muted-foreground/80'
                aria-hidden='true'
              />
            )}
            <span
              className={`text-xs ${req.met ? "text-emerald-600" : "text-muted-foreground"}`}
            >
              {req.text}
              <span className='sr-only'>
                {req.met ? " - Requirement met" : " - Requirement not met"}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
