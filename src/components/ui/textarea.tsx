import { TextareaHTMLAttributes } from "react";

export default function Textarea(
  props: TextareaHTMLAttributes<HTMLTextAreaElement>
) {
  return (
    <textarea
      {...props}
      className="
      w-full
      min-h-[160px]
      p-4
      rounded-xl
      bg-black/20
      border
      border-white/10
      outline-none
      focus:border-nebula
    "
    />
  );
}
