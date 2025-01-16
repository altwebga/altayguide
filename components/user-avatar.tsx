import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type UserAvatarProps = {
  src: string;
  alt: string;
};

export function UserAvatar({ src, alt }: UserAvatarProps) {
  return (
    <Avatar className="h-8 w-8 rounded-lg">
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback className="rounded-lg">CN</AvatarFallback>
    </Avatar>
  );
}
