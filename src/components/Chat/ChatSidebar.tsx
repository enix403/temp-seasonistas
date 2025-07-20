import Image from "next/image";
import { FiSearch } from "react-icons/fi";

type ChatUser = {
  id: number;
  name: string;
  role: string;
  company: string;
  lastMessage: string;
  avatar: any;
  online: boolean;
  unread: boolean;
};

const ChatSidebar = ({
  users,
  activeId,
  onSelect
}: {
  users: ChatUser[];
  activeId: number | null;

  onSelect: (id: number) => void;
}) => {
  return (
    <div className='flex h-full w-full flex-col border-r bg-white md:w-[300px]'>
      {/* Header  */}
      <div className='border-b p-4'>
        <h2 className='mb-2 text-[20px] leading-[24px] font-[400]'>Messages</h2>
        <div className='relative w-full'>
          <input
            className='w-full rounded-full border p-2 pl-10 text-sm'
            placeholder='Search messages'
          />
          <FiSearch className='absolute top-1/2 left-3 -translate-y-1/2 transform text-gray-400' />
        </div>
      </div>

      {/* Chat List */}
      <div className='flex-1 space-y-2 overflow-y-auto px-2 py-2'>
        {users.map(user => (
          <div
            key={user.id}
            onClick={() => onSelect(user.id)}
            className={`flex cursor-pointer items-center gap-3 px-4 py-[10px] transition-colors ${
              user.id === activeId
                ? "bg-[#559093] text-white"
                : "text-black hover:bg-gray-100"
            } rounded-[7px]`}
          >
            {/* Avatar with online dot */}
            <div className='relative h-12 w-12 shrink-0'>
              <div className='h-full w-full overflow-hidden rounded-full bg-[#F3F2FF]'>
                <Image
                  width={40}
                  height={40}
                  alt={user.name}
                  src={user.avatar}
                  className='h-full w-full object-cover'
                />
              </div>
              {user.online && (
                <span className='absolute right-0 bottom-0 h-3.5 w-3.5 rounded-full border-[2px] border-white bg-green-500' />
              )}
            </div>

            {/* Info */}
            <div className='flex-1'>
              <p className='truncate text-sm font-medium'>{user.name}</p>
              <p className='truncate text-xs'>{user.lastMessage}</p>
            </div>

            {/* Unread Dot */}
            {user.unread && (
              <div className='h-2 w-2 rounded-full bg-purple-500' />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatSidebar;
