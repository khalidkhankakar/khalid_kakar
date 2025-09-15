import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface Props{
    children: React.ReactNode,
    side: "top" | "right" | "bottom" | "left",
    text:string
}

const Hint = ({children, side, text}:Props) => {
  return (
<Tooltip >
  <TooltipTrigger asChild>{children}</TooltipTrigger>
  <TooltipContent side={side}>
    <p className='font-poppins text-xs'>{text}</p>
  </TooltipContent>
</Tooltip>
  )
}

export default Hint
