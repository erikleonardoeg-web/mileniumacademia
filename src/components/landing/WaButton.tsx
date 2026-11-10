import { MessageCircle } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { waMsg, type MessageKey } from "@/config/site";

export function WaButton({ msg, children, variant = "hero", size = "xl", className }: { msg: MessageKey; children: React.ReactNode } & Pick<ButtonProps, "variant" | "size" | "className">) {
  return (
    <Button asChild variant={variant} size={size} className={className}>
      <a href={waMsg(msg)} target="_blank" rel="noopener noreferrer"><MessageCircle />{children}</a>
    </Button>
  );
}
