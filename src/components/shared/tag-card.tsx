import { getDeviconClassName } from '@/lib/utils'

import { Badge } from '../ui/badge';
import { X } from 'lucide-react';

interface Props {
  id: string
  name: string
  onRemove?: () => void
  remove?: boolean

}

const TagCard = ({ name, id, onRemove, remove }: Props) => {
  const iconClass = getDeviconClassName(name);
  return (
    <div className="flex  items-center  justify-between rounded-xl gap-2">
      <Badge className="space-x-0.5 bg-gray-200 dark:bg-gray-800 rounded-md border-none  py-2 px-3 uppercase">
        <div className="flex items-center justify-center space-x-2">
          <i className={`${iconClass} text-lg`}></i>
          <span className='font-poppins font-semibold text-black dark:text-white'>{name}</span>
        </div>
        {
          remove && <X  size={30} onClick={onRemove} />
        }
      </Badge>
    </div>
  )
}

export default TagCard