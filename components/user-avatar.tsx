import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

type UserAvatarProps = {
  src: string;
  alt: string;
  className?: string;
};

export function UserAvatar({ src, alt, className }: UserAvatarProps) {
  return (
    <Avatar className={cn("h-8 w-8 rounded-lg", className)}>
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
