import { ArchiveIcon } from '@radix-ui/react-icons';
import { FaXTwitter } from 'react-icons/fa6';
import { FiGithub } from 'react-icons/fi';
import {
  MdAdd,
  MdArrowBack,
  MdArrowLeft,
  MdArrowRight,
  MdArrowRightAlt,
  MdArrowUpward,
  MdAttachMoney,
  MdAutoAwesome,
  MdBarChart,
  MdChangeHistory,
  MdChevronLeft,
  MdChevronRight,
  MdClose,
  MdDescription,
  MdDriveFileMove,
  MdEditCalendar,
  MdErrorOutline,
  MdExpandLess,
  MdExpandMore,
  MdFence,
  MdFolder,
  MdFolderSpecial,
  MdFolderZip,
  MdInventory2,
  MdIosShare,
  MdKeyboardArrowDown,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardArrowUp,
  MdMenu,
  MdMoreHoriz,
  MdOutlineAccountBalance,
  MdOutlineAccountCircle,
  MdOutlineApps,
  MdOutlineArrowDownward,
  MdOutlineArrowForward,
  MdOutlineAttachFile,
  MdOutlineAutoAwesome,
  MdOutlineBackspace,
  MdOutlineBrokenImage,
  MdOutlineCalendarMonth,
  MdOutlineCancel,
  MdOutlineCategory,
  MdOutlineChatBubbleOutline,
  MdOutlineClear,
  MdOutlineContentCopy,
  MdOutlineCreateNewFolder,
  MdOutlineDashboardCustomize,
  MdOutlineDelete,
  MdOutlineDescription,
  MdOutlineEmail,
  MdOutlineExitToApp,
  MdOutlineFace,
  MdOutlineFileDownload,
  MdOutlineFilterList,
  MdOutlineForwardToInbox,
  MdOutlineHandyman,
  MdOutlineHourglassTop,
  MdOutlineInbox,
  MdOutlineInsertPhoto,
  MdOutlineInventory2,
  MdOutlineListAlt,
  MdOutlineMoreVert,
  MdOutlineMoveToInbox,
  MdOutlineNotificationsNone,
  MdOutlineOpenInFull,
  MdOutlinePalette,
  MdOutlinePause,
  MdOutlinePlayArrow,
  MdOutlineQuestionAnswer,
  MdOutlineRepeat,
  MdOutlineSettings,
  MdOutlineStyle,
  MdOutlineSubject,
  MdOutlineTask,
  MdOutlineTimer,
  MdOutlineTune,
  MdOutlineUploadFile,
  MdOutlineVisibility,
  MdOutlineVolumeOff,
  MdOutlineVolumeUp,
  MdPause,
  MdPauseCircle,
  MdPeople,
  MdPerson,
  MdPictureAsPdf,
  MdPlayArrow,
  MdPlayCircle,
  MdRefresh,
  MdRemove,
  MdReplay,
  MdRuleFolder,
  MdSearch,
  MdSecurity,
  MdSignalCellularAlt,
  MdSort,
  MdSubdirectoryArrowLeft,
  MdTopic,
  MdTrendingDown,
  MdTrendingUp,
} from 'react-icons/md';
import { PiDiscordLogo } from 'react-icons/pi';

export const Icons = {
  Overview: MdBarChart,
  Apps: MdOutlineApps,
  Transactions: MdOutlineListAlt,
  Invoice: MdOutlineDescription,
  Files: MdOutlineInventory2,
  X: FaXTwitter,
  Discord: PiDiscordLogo,
  GithubOutline: FiGithub,
  Apple: (props: any) => (
    <svg
      fill="none"
      height={23}
      width={19}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18.143 17.645a11.967 11.967 0 0 1-1.183 2.126c-.622.887-1.131 1.5-1.524 1.842-.608.56-1.26.846-1.958.862-.501 0-1.105-.143-1.809-.432-.706-.288-1.354-.43-1.947-.43-.622 0-1.29.142-2.003.43-.714.29-1.29.44-1.73.455-.67.029-1.337-.266-2.002-.885-.426-.371-.957-1.007-1.594-1.907-.683-.961-1.245-2.076-1.685-3.347C.236 14.986 0 13.656 0 12.369c0-1.474.319-2.746.957-3.811A5.612 5.612 0 0 1 2.96 6.53a5.39 5.39 0 0 1 2.71-.765c.531 0 1.228.165 2.095.488.863.324 1.418.489 1.661.489.182 0 .799-.192 1.843-.576.988-.355 1.822-.503 2.505-.445 1.851.15 3.242.88 4.166 2.194-1.655 1.003-2.474 2.408-2.458 4.21.015 1.404.524 2.572 1.525 3.5.454.43.96.763 1.524.999a16.56 16.56 0 0 1-.388 1.02ZM13.898.94c0 1.1-.402 2.128-1.204 3.079-.967 1.13-2.136 1.783-3.404 1.68a3.425 3.425 0 0 1-.026-.417c0-1.056.46-2.186 1.277-3.11.407-.469.926-.858 1.555-1.168.627-.306 1.22-.475 1.778-.504.017.147.024.294.024.44Z"
        fill="currentColor"
      />
    </svg>
  ),
  Google: (props: any) => (
    <svg
      fill="none"
      height="20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#a)">
        <path
          d="M10 3.958c1.475 0 2.796.509 3.838 1.5l2.854-2.854C14.959.992 12.696 0 10 0a9.995 9.995 0 0 0-8.933 5.508l3.325 2.58c.787-2.371 3-4.13 5.608-4.13Z"
          fill="#585858"
        />
        <path
          d="M19.575 10.23c0-.655-.063-1.288-.158-1.897H10v3.759h5.392a4.648 4.648 0 0 1-1.992 2.991l3.22 2.5c1.88-1.741 2.955-4.316 2.955-7.354Z"
          fill="#878787"
        />
        <path
          d="M4.388 11.912A6.075 6.075 0 0 1 4.07 10c0-.667.112-1.308.317-1.913L1.063 5.508A9.964 9.964 0 0 0 0 10c0 1.617.383 3.142 1.067 4.492l3.32-2.58Z"
          fill="#D7D7D7"
        />
        <path
          d="M10 20c2.7 0 4.97-.887 6.62-2.42l-3.22-2.5c-.896.603-2.05.958-3.4.958-2.608 0-4.82-1.759-5.612-4.13l-3.325 2.58C2.712 17.758 6.091 20 10 20Z"
          fill="#B3B3B3"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path d="M0 0h20v20H0z" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  ),
  InboxCustomize: (props: any) => (
    <svg
      height={17}
      viewBox="0 -960 960 960"
      width={17}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M200-160q-33 0-56.5-23.5T120-240v-560q0-33 23.5-56.5T200-880h560q33 0 56.5 23.5T840-800v226q-19-9-39-14.5t-41-8.5v-203H200v360h168q9 27 30 47t47 28q-3 20-4 40.5t2 40.5q-36-7-67.5-26.5T320-360H200v120h253q7 22 16 42t22 38H200Zm0-80h253-253Zm481 120-12-60q-12-5-22.5-10.5T625-204l-58 18-40-68 46-40q-2-12-2-26t2-26l-46-40 40-68 58 18q11-8 21.5-13.5T669-460l12-60h80l12 60q12 5 22.5 10.5T817-436l58-18 40 68-46 40q2 12 2 26t-2 26l46 40-40 68-58-18q-11 8-21.5 13.5T773-180l-12 60h-80Zm40-120q33 0 56.5-23.5T801-320q0-33-23.5-56.5T721-400q-33 0-56.5 23.5T641-320q0 33 23.5 56.5T721-240Z"
        fill="currentColor"
      />
    </svg>
  ),
  Settings: MdOutlineSettings,
  Inbox: ArchiveIcon,
  Inbox2: MdOutlineInbox,
  Check: (props: any) => (
    <svg
      fill="none"
      height={17}
      width={16}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="m14 5.167-8 8L2.333 9.5l.94-.94L6 11.28l7.06-7.053.94.94Z"
        fill="currentColor"
      />
    </svg>
  ),
  AlertCircle: (props: any) => (
    <svg
      fill="none"
      height={17}
      width={16}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.333 10.5h1.334v1.333H7.334V10.5Zm0-5.333h1.334v4H7.334v-4ZM8 1.833c-3.686 0-6.667 3-6.667 6.667A6.667 6.667 0 1 0 8 1.833Zm0 12A5.333 5.333 0 1 1 8 3.167a5.333 5.333 0 0 1 0 10.666Z"
        fill="currentColor"
      />
    </svg>
  ),
  Transactions2: (props: any) => (
    <svg
      fill="none"
      height={40}
      width={40}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M23.333 16.667H5V20h18.333v-3.333Zm0-6.667H5v3.333h18.333V10ZM5 26.667h11.667v-3.334H5v3.334Zm19 10 4.333-4.334 4.334 4.334L35 34.333 30.667 30 35 25.667l-2.333-2.334-4.334 4.334L24 23.333l-2.333 2.334L26 30l-4.333 4.333L24 36.667Z"
        fill="currentColor"
      />
    </svg>
  ),
  Bank: (props: any) => (
    <svg
      fill="none"
      height={37}
      width={36}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M33.167 36.833 30.333 34h-28.5v-3.333H27L19.334 23v4.333H16v-7.666l-7.333-7.334H1.834V9l2.333-1.167L.333 4 2.5 1.833l32.834 32.834-2.167 2.166ZM6 15.667v11.666h3.334V15.667H6ZM17.667 4.5 26.333 9h-12.5l3.334 3.333H33.5V9L17.667.667l-8 4.166 2.5 2.5 5.5-2.833Zm11.666 20v-8.833H26v5.5l3.334 3.333Z"
        fill="currentColor"
      />
    </svg>
  ),
  Info: (props: any) => (
    <svg
      fill="none"
      height={14}
      width={14}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.333 5h1.333V3.667H6.333M7 12.333A5.34 5.34 0 0 1 1.666 7 5.34 5.34 0 0 1 7 1.667 5.34 5.34 0 0 1 12.333 7 5.34 5.34 0 0 1 7 12.333Zm0-12a6.667 6.667 0 1 0 0 13.334A6.667 6.667 0 0 0 7 .333Zm-.667 10h1.333v-4H6.333v4Z"
        fill="currentColor"
      />
    </svg>
  ),
  Close: MdClose,
  Remove: MdRemove,
  ChartGantt: (props: any) => (
    <svg
      fill="none"
      height={24}
      width={25}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.942 5h8V2h2v20h-2v-4h-4v-3h4v-2h-6v-3h6V8h-8V5Zm12 0h3v3h-3V5Zm0 5h5v3h-5v-3Zm0 5h8v3h-8v-3Z"
        fill="currentColor"
      />
    </svg>
  ),
  CreationOutline: (props: any) => (
    <svg
      fill="none"
      height={24}
      width={25}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="m9.873 4 2.5 5.5 5.5 2.5-5.5 2.5-2.5 5.5-2.5-5.5-5.5-2.5 5.5-2.5 2.5-5.5Zm0 4.83-1 2.17-2.17 1 2.17 1 1 2.17 1-2.17 2.17-1-2.17-1-1-2.17Zm10 .17-1.26-2.74L15.873 5l2.74-1.25L19.873 1l1.25 2.75L23.873 5l-2.75 1.26L19.873 9Zm0 14-1.26-2.74-2.74-1.26 2.74-1.25 1.26-2.75 1.25 2.75 2.75 1.25-2.75 1.26-1.25 2.74Z"
        fill="currentColor"
      />
    </svg>
  ),
  FileDocument: (props: any) => (
    <svg
      fill="none"
      height={23}
      width={24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.395 0H7.728a1.922 1.922 0 0 0-1.917 1.917V17.25c0 1.054.863 1.917 1.917 1.917h11.5a1.922 1.922 0 0 0 1.917-1.917V5.75L15.395 0Zm3.833 17.25h-11.5V1.917h6.708v4.791h4.792V17.25ZM3.895 3.833v17.25h15.333V23H3.895a1.922 1.922 0 0 1-1.917-1.917V3.833h1.917Zm5.75 5.75V11.5h7.666V9.583H9.645Zm0 3.834v1.916h4.791v-1.916H9.645Z"
        fill="currentColor"
      />
    </svg>
  ),
  OpenSource: (props: any) => (
    <svg
      fill="none"
      height={24}
      width={25}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.942 1c6.076 0 11 4.925 11 11 0 4.84-3.125 8.95-7.468 10.42l-.248.082-3.194-8.305A2.218 2.218 0 0 0 15.141 12a2.2 2.2 0 1 0-2.29 2.198l-3.194 8.304-.248-.082C5.066 20.95 1.942 16.84 1.942 12c0-6.075 4.925-11 11-11Zm0 2.2a8.8 8.8 0 0 0-4.509 16.36l1.629-4.235a4.399 4.399 0 0 1 2.88-7.725 4.399 4.399 0 0 1 2.882 7.725c.622 1.622 1.165 3.033 1.627 4.235A8.8 8.8 0 0 0 12.942 3.2Z"
        fill="currentColor"
      />
    </svg>
  ),
  ReceiptText: (props: any) => (
    <svg
      fill="none"
      height={25}
      width={25}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="m13.85 20.927-1.26 1.26-1.5-1.5-1.5 1.5-1.5-1.5-1.5 1.5-1.5-1.5-1.5 1.5v-20l1.5 1.5 1.5-1.5 1.5 1.5 1.5-1.5 1.5 1.5 1.5-1.5 1.5 1.5 1.5-1.5 1.5 1.5 1.5-1.5 1.5 1.5 1.5-1.5v11.35c-.63-.22-1.3-.35-2-.35v-8h-14v14h8c0 .57.1 1.22.26 1.74Zm-7.26-5.74v2h7.35c.26-.75.65-1.42 1.19-2H6.59Zm0-2h12v-2h-12v2Zm0-4h12v-2h-12v2Zm17 8.23-1.16-1.41-3.59 3.59-1.59-1.59-1.16 1.18 2.75 3"
        fill="currentColor"
      />
    </svg>
  ),
  TimeCog: (props: any) => (
    <svg
      fill="none"
      height={25}
      width={25}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M22.947 19.415c.1 0 .1.1 0 .2l-1 1.7c-.1.1-.2.1-.3.1l-1.2-.4c-.3.2-.5.3-.8.5l-.2 1.3c0 .1-.1.2-.2.2h-2c-.1 0-.2-.1-.3-.2l-.2-1.3c-.3-.1-.6-.3-.8-.5l-1.2.5c-.1 0-.2 0-.3-.1l-1-1.7c-.1-.1 0-.2.1-.3l1.1-.8v-1l-1.1-.8c-.1-.1-.1-.2-.1-.3l1-1.7c.1-.1.2-.1.3-.1l1.2.5c.3-.2.5-.3.8-.5l.2-1.3c0-.1.1-.2.3-.2h2c.1 0 .2.1.2.2l.2 1.3c.3.1.6.3.9.5l1.2-.5c.1 0 .3 0 .3.1l1 1.7c.1.1 0 .2-.1.3l-1.1.8v1l1.1.8Zm-3.3-1.4c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5.7 1.5 1.5 1.5 1.5-.7 1.5-1.5Zm-6.5-4v-6h-2v6m4-13h-6v2h6v-2Zm-3.7 19c-3.5-.4-6.3-3.4-6.3-7 0-3.9 3.1-7 7-7 3.2 0 5.9 2.1 6.7 5 .8.1 1.5.3 2.2.6-.3-1.6-.9-3-1.9-4.2l1.5-1.4c-.5-.5-1-1-1.5-1.4l-1.4 1.4c-1.5-1.3-3.5-2-5.6-2-5 0-9 4-9 9s4 9 9 9h.3c-.5-.6-.8-1.3-1-2Z"
        fill="currentColor"
      />
    </svg>
  ),
  Slack: (props: any) => (
    <svg
      fill="none"
      height="21"
      viewBox="0 0 20 21"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_1185_1063)">
        <path
          d="M4.20167 13.1375C4.20057 13.6943 3.97905 14.2281 3.58553 14.6221C3.19201 15.0161 2.65851 15.2382 2.10167 15.24C1.54453 15.2387 1.01061 15.0167 0.616729 14.6227C0.222852 14.2286 0.00110036 13.6946 0 13.1375C0.00154122 12.5807 0.223514 12.0472 0.617367 11.6537C1.01122 11.2601 1.5449 11.0386 2.10167 11.0375H4.20167V13.1375ZM5.26083 13.1375C5.26237 12.5809 5.48423 12.0475 5.8779 11.654C6.27158 11.2605 6.80504 11.0388 7.36167 11.0375C7.91829 11.0388 8.45176 11.2605 8.84543 11.654C9.2391 12.0475 9.46096 12.5809 9.4625 13.1375V18.3983C9.46118 18.9552 9.23945 19.4889 8.84577 19.8827C8.4521 20.2765 7.91851 20.4985 7.36167 20.5C6.80482 20.4985 6.27123 20.2765 5.87756 19.8827C5.48389 19.4889 5.26215 18.9552 5.26083 18.3983V13.1375ZM7.36167 4.70167C6.80511 4.70013 6.27177 4.47841 5.87815 4.08494C5.48452 3.69147 5.26259 3.15822 5.26083 2.60167C5.26215 2.04482 5.48389 1.51115 5.87756 1.11732C6.27123 0.723486 6.80482 0.50154 7.36167 0.5C7.91851 0.50154 8.4521 0.723486 8.84577 1.11732C9.23945 1.51115 9.46118 2.04482 9.4625 2.60167V4.70167H7.36167ZM7.36167 5.76083C7.91837 5.76237 8.45183 5.9842 8.84548 6.37785C9.23913 6.7715 9.46096 7.30496 9.4625 7.86167C9.46096 8.41837 9.23913 8.95183 8.84548 9.34548C8.45183 9.73913 7.91837 9.96096 7.36167 9.9625H2.10167C1.54482 9.96118 1.01115 9.73945 0.617316 9.34577C0.223486 8.9521 0.00154034 8.41851 0 7.86167C0.00154034 7.30482 0.223486 6.77123 0.617316 6.37756C1.01115 5.98389 1.54482 5.76215 2.10167 5.76083H7.36167ZM15.7967 7.86167C15.7982 7.30482 16.0202 6.77123 16.414 6.37756C16.8078 5.98389 17.3415 5.76215 17.8983 5.76083C18.4552 5.76215 18.9889 5.98389 19.3827 6.37756C19.7765 6.77123 19.9985 7.30482 20 7.86167C19.9985 8.41851 19.7765 8.9521 19.3827 9.34577C18.9889 9.73945 18.4552 9.96118 17.8983 9.9625H15.7967V7.86167ZM14.74 7.86167C14.7385 8.41866 14.5164 8.95237 14.1224 9.34607C13.7284 9.73976 13.1945 9.9614 12.6375 9.9625C12.0809 9.96096 11.5475 9.7391 11.154 9.34543C10.7605 8.95176 10.5388 8.41829 10.5375 7.86167V2.60167C10.5386 2.0449 10.7601 1.51122 11.1537 1.11737C11.5472 0.723514 12.0807 0.501541 12.6375 0.5C13.1946 0.5011 13.7286 0.722852 14.1227 1.11673C14.5167 1.51061 14.7387 2.04453 14.74 2.60167V7.86167ZM12.6375 16.2967C13.1946 16.2978 13.7286 16.5195 14.1227 16.9134C14.5167 17.3073 14.7387 17.8412 14.74 18.3983C14.7387 18.9555 14.5167 19.4894 14.1227 19.8833C13.7286 20.2771 13.1946 20.4989 12.6375 20.5C12.0807 20.4985 11.5472 20.2765 11.1537 19.8826C10.7601 19.4888 10.5386 18.9551 10.5375 18.3983V16.2967H12.6375ZM12.6375 15.24C12.0806 15.2385 11.547 15.0164 11.1534 14.6223C10.7598 14.2283 10.5384 13.6944 10.5375 13.1375C10.5388 12.581 10.7605 12.0476 11.154 11.654C11.5476 11.2605 12.081 11.0388 12.6375 11.0375H17.8983C18.4551 11.0386 18.9888 11.2601 19.3826 11.6537C19.7765 12.0472 19.9985 12.5807 20 13.1375C19.9989 13.6946 19.7771 14.2286 19.3833 14.6227C18.9894 15.0167 18.4555 15.2387 17.8983 15.24H12.6375Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_1185_1063">
          <rect
            fill="white"
            height="20"
            transform="translate(0 0.5)"
            width="20"
          />
        </clipPath>
      </defs>
    </svg>
  ),
  Github: (props: any) => (
    <svg
      fill="none"
      height={22}
      width={22}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M11.21.22C5.412.22.71 5.038.71 10.984c0 4.757 3.009 8.792 7.18 10.216.525.1.718-.234.718-.518 0-.257-.01-1.105-.014-2.005-2.921.652-3.538-1.27-3.538-1.27-.477-1.244-1.165-1.575-1.165-1.575-.953-.668.071-.655.071-.655 1.055.076 1.61 1.11 1.61 1.11.936 1.646 2.456 1.17 3.056.895.094-.696.366-1.171.666-1.44-2.332-.272-4.784-1.195-4.784-5.32 0-1.176.41-2.136 1.082-2.89-.109-.271-.468-1.366.102-2.85 0 0 .882-.288 2.888 1.105a9.833 9.833 0 0 1 2.628-.363 9.857 9.857 0 0 1 2.63.363c2.005-1.393 2.885-1.104 2.885-1.104.572 1.483.212 2.578.103 2.849.674.754 1.08 1.714 1.08 2.89 0 4.135-2.455 5.045-4.794 5.312.377.334.712.989.712 1.993 0 1.44-.011 2.6-.011 2.955 0 .286.188.622.72.516 4.17-1.425 7.175-5.459 7.175-10.214 0-5.946-4.7-10.766-10.5-10.766Z"
        fill="currentColor"
        fillRule="evenodd"
      />
      <path
        d="M4.687 15.677c-.023.053-.105.07-.18.033-.076-.036-.119-.109-.094-.162.023-.055.105-.07.18-.034.077.035.12.109.094.163Zm.425.486c-.05.047-.148.025-.214-.05-.069-.075-.082-.176-.03-.224.05-.047.146-.025.214.05.07.076.083.176.03.224Zm.414.62c-.064.046-.17.003-.234-.093-.065-.096-.065-.21.001-.257.065-.046.17-.004.235.09.064.098.064.213-.002.26Zm.568.599c-.058.065-.18.047-.27-.041-.092-.087-.117-.21-.06-.275.058-.066.182-.047.272.04.091.087.119.211.058.276Zm.782.348c-.026.084-.143.122-.262.087-.12-.037-.197-.136-.173-.221.025-.085.143-.125.263-.087.119.037.197.135.172.22Zm.86.064c.002.09-.098.163-.223.164-.126.003-.228-.069-.229-.156 0-.09.099-.162.224-.165.125-.002.228.07.228.157Zm.799-.139c.015.086-.072.175-.196.199-.122.023-.235-.03-.25-.116-.015-.09.073-.178.195-.201.124-.022.235.03.25.118Z"
        fill="currentColor"
      />
    </svg>
  ),
  OpenAI: (props: any) => (
    <svg
      fill="none"
      height={24}
      width={120}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M78.317 11.306c0-2.242 1.44-3.806 3.438-3.806 1.997 0 3.437 1.564 3.437 3.806 0 2.241-1.44 3.805-3.438 3.805-1.997 0-3.437-1.564-3.437-3.805Zm5.555 0c0-1.603-.875-2.645-2.118-2.645-1.242 0-2.117 1.038-2.117 2.645s.875 2.644 2.117 2.644c1.243 0 2.118-1.037 2.118-2.644Zm5.022 3.805c-.698 0-1.212-.278-1.55-.677v2.417h-1.235V9.6h1.234v.574c.339-.403.853-.677 1.551-.677 1.513 0 2.375 1.277 2.375 2.807s-.866 2.807-2.375 2.807ZM87.31 12.15v.317c0 .999.574 1.564 1.337 1.564.896 0 1.38-.698 1.38-1.727 0-1.028-.484-1.727-1.38-1.727-.763 0-1.337.557-1.337 1.573Zm7.298 2.961c-1.543 0-2.623-1.14-2.623-2.807s1.072-2.807 2.572-2.807 2.396 1.183 2.396 2.666v.411h-3.785c.095.926.647 1.492 1.44 1.492.609 0 1.089-.309 1.256-.866l1.059.403c-.382.947-1.235 1.513-2.315 1.513v-.005Zm-.06-4.577c-.638 0-1.131.382-1.315 1.11h2.477c-.009-.595-.382-1.11-1.162-1.11ZM97.882 15V9.6h1.234v.574c.308-.36.793-.677 1.491-.677 1.132 0 1.809.78 1.809 1.946V15h-1.234v-3.197c0-.669-.266-1.153-.947-1.153-.558 0-1.123.411-1.123 1.183V15h-1.235.005Zm8.151-7.384h1.492L110.323 15h-1.328l-.639-1.689h-3.189L104.542 15h-1.307l2.798-7.384Zm.72 1.461-1.153 3.086h2.323l-1.174-3.086h.004Zm5.687-1.461V15h-1.315V7.616h1.315ZM75.3 10.324a3.47 3.47 0 0 0 .159-1.435 3.387 3.387 0 0 0-.45-1.372 3.468 3.468 0 0 0-1.59-1.436 3.433 3.433 0 0 0-2.13-.222 3.418 3.418 0 0 0-2.58-1.149 3.46 3.46 0 0 0-3.3 2.391 3.418 3.418 0 0 0-2.285 1.659 3.458 3.458 0 0 0 .428 4.054 3.47 3.47 0 0 0-.158 1.436c.052.484.206.951.45 1.371a3.468 3.468 0 0 0 1.59 1.436c.669.3 1.415.377 2.13.223a3.417 3.417 0 0 0 2.58 1.148 3.467 3.467 0 0 0 3.3-2.396 3.417 3.417 0 0 0 2.284-1.658 3.445 3.445 0 0 0 .446-2.096 3.433 3.433 0 0 0-.874-1.954Zm-5.126 7.205c-.681 0-1.213-.21-1.671-.596.021-.013.055-.03.081-.047l2.73-1.577a.424.424 0 0 0 .163-.163.457.457 0 0 0 .06-.223v-3.849l1.153.669s.013.008.017.013c0 .004.004.012.009.017v3.188c0 1.445-1.205 2.572-2.542 2.572v-.005Zm-5.55-2.358a2.544 2.544 0 0 1-.304-1.723c.021.013.056.035.081.048l2.73 1.577c.069.038.146.06.223.06a.457.457 0 0 0 .223-.06l3.334-1.925v1.355c0 .004-.008.013-.013.017l-2.76 1.594a2.583 2.583 0 0 1-1.95.257 2.565 2.565 0 0 1-1.56-1.195l-.004-.005Zm-.72-5.961a2.56 2.56 0 0 1 1.337-1.127v3.248a.46.46 0 0 0 .06.223.425.425 0 0 0 .163.163l3.335 1.924-1.153.669s-.013.004-.017.008h-.022l-2.76-1.594a2.573 2.573 0 0 1-.943-3.51V9.21Zm9.484 2.207-3.334-1.924 1.153-.664s.013-.005.017-.009h.022l2.76 1.594a2.573 2.573 0 0 1 1.277 2.443 2.563 2.563 0 0 1-.519 1.337c-.295.39-.694.686-1.153.853V11.8a.457.457 0 0 0-.06-.223.425.425 0 0 0-.163-.163v.004Zm1.15-1.731s-.057-.035-.082-.047l-2.73-1.578a.445.445 0 0 0-.446 0l-3.334 1.925V8.63c0-.004.008-.012.013-.017l2.76-1.594a2.56 2.56 0 0 1 2.751.116 2.586 2.586 0 0 1 1.063 2.545l.004.005Zm-7.222 2.378-1.153-.668-.017-.013a.032.032 0 0 0-.009-.017V8.177c0-.488.141-.964.403-1.38a2.542 2.542 0 0 1 1.08-.947 2.604 2.604 0 0 1 1.418-.223c.485.064.943.262 1.316.574-.021.013-.055.03-.081.048l-2.73 1.577a.425.425 0 0 0-.163.163.457.457 0 0 0-.06.222v3.849l-.004.004Zm.625-1.35 1.483-.857 1.483.857v1.714l-1.483.858-1.483-.857v-1.715Zm-59.07 1.427V15H7.556V7.616h2.952c1.646 0 2.675.771 2.675 2.263 0 1.491-1.029 2.262-2.675 2.262H8.871Zm0-1.131h1.565c.947 0 1.448-.411 1.448-1.131s-.505-1.132-1.448-1.132H8.87v2.263Zm9.682 1.294c0 1.676-1.08 2.807-2.602 2.807-1.521 0-2.601-1.131-2.601-2.807 0-1.675 1.08-2.807 2.601-2.807 1.522 0 2.602 1.132 2.602 2.807Zm-3.96 0c0 1.102.523 1.77 1.358 1.77.836 0 1.359-.668 1.359-1.77 0-1.101-.523-1.77-1.359-1.77-.835 0-1.358.669-1.358 1.77ZM21.934 9.6h1.02l.969 3.579.956-3.579h1.225L24.48 15h-1.072l-.985-3.54-.986 3.54h-1.071L18.74 9.6h1.265l.977 3.579.956-3.579h-.005Zm6.964 5.511c-1.542 0-2.622-1.14-2.622-2.807s1.071-2.807 2.571-2.807c1.5 0 2.396 1.183 2.396 2.666v.411h-3.784c.094.926.647 1.492 1.44 1.492.608 0 1.088-.309 1.255-.866l1.059.403c-.382.947-1.235 1.513-2.315 1.513v-.005Zm-.06-4.577c-.638 0-1.13.382-1.315 1.11H30c-.009-.595-.381-1.11-1.162-1.11Zm6.348-.947v1.235a3.023 3.023 0 0 0-.455-.03c-.78 0-1.38.505-1.38 1.367v2.837h-1.234v-5.4h1.234v.801c.236-.506.793-.831 1.483-.831.146 0 .257.008.352.021Zm2.824 5.524c-1.543 0-2.623-1.14-2.623-2.807s1.072-2.807 2.572-2.807 2.395 1.183 2.395 2.666v.411H36.57c.094.926.647 1.492 1.44 1.492.608 0 1.089-.309 1.256-.866l1.058.403c-.381.947-1.234 1.513-2.314 1.513v-.005Zm-.06-4.577c-.639 0-1.132.382-1.316 1.11h2.477c-.008-.595-.381-1.11-1.161-1.11Zm5.319 4.577c-1.513 0-2.375-1.277-2.375-2.807s.866-2.807 2.375-2.807c.698 0 1.212.279 1.551.677V7.611h1.234v7.385H44.82v-.566c-.339.403-.853.677-1.551.677v.004Zm1.585-2.961c0-1.02-.574-1.573-1.337-1.573-.896 0-1.38.699-1.38 1.727 0 1.029.484 1.727 1.38 1.727.763 0 1.337-.565 1.337-1.564v-.317Zm7.453 2.961c-.699 0-1.213-.278-1.551-.677V15H49.52V7.616h1.235v2.563c.338-.403.852-.678 1.551-.678 1.513 0 2.374 1.278 2.374 2.808 0 1.53-.865 2.807-2.374 2.807v-.005Zm-1.586-2.961v.317c0 .999.575 1.564 1.338 1.564.895 0 1.38-.698 1.38-1.727 0-1.028-.485-1.727-1.38-1.727-.763 0-1.338.557-1.338 1.573Zm7.106 3.351c-.308.823-.78 1.389-1.903 1.389-.257 0-.33-.009-.505-.03v-1.037c.162.021.257.03.41.03.412 0 .61-.111.78-.544l.207-.506L54.853 9.6h1.294l1.329 3.784L58.77 9.6h1.277l-2.22 5.906V15.5Z"
        fill="currentColor"
      />
    </svg>
  ),
  Sidebar: (props: any) => (
    <svg
      fill="currentColor"
      height={24}
      viewBox="0 -960 960 960"
      width={24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm240-80h400v-480H400v480Zm-80 0v-480H160v480h160Zm-160 0v-480 480Zm160 0h80-80Zm0-480h80-80Z" />
    </svg>
  ),
  SidebarFilled: (props: any) => (
    <svg
      fill="currentColor"
      height={24}
      viewBox="0 -960 960 960"
      width={24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h160v640H160Zm240 0v-640h400q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H400Z" />
    </svg>
  ),
  Reconnect: (props: any) => (
    <svg
      fill="currentColor"
      height={props.size}
      viewBox="0 -960 960 960"
      width={props.size}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M760-120q-39 0-70-22.5T647-200H440q-66 0-113-47t-47-113q0-66 47-113t113-47h80q33 0 56.5-23.5T600-600q0-33-23.5-56.5T520-680H313q-13 35-43.5 57.5T200-600q-50 0-85-35t-35-85q0-50 35-85t85-35q39 0 69.5 22.5T313-760h207q66 0 113 47t47 113q0 66-47 113t-113 47h-80q-33 0-56.5 23.5T360-360q0 33 23.5 56.5T440-280h207q13-35 43.5-57.5T760-360q50 0 85 35t35 85q0 50-35 85t-85 35ZM200-680q17 0 28.5-11.5T240-720q0-17-11.5-28.5T200-760q-17 0-28.5 11.5T160-720q0 17 11.5 28.5T200-680Z" />
    </svg>
  ),
  CreateTransaction: (props: any) => (
    <svg
      fill="currentColor"
      height={props.size ?? 24}
      viewBox="0 -960 960 960"
      width={props.size ?? 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M640-121v-120H520v-80h120v-120h80v120h120v80H720v120h-80ZM160-240v-80h283q-3 21-2.5 40t3.5 40H160Zm0-160v-80h386q-23 16-41.5 36T472-400H160Zm0-160v-80h600v80H160Zm0-160v-80h600v80H160Z" />
    </svg>
  ),
  Import: (props: any) => (
    <svg
      fill="currentColor"
      height={props.size ?? 24}
      viewBox="0 -960 960 960"
      width={props.size ?? 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M160-120v-720h640v400H240v80h200v80H240v80h200v80H160Zm456 0L504-232l56-56 56 56 142-142 56 56-198 198ZM240-520h200v-80H240v80Zm280 0h200v-80H520v80ZM240-680h200v-80H240v80Zm280 0h200v-80H520v80Z" />
    </svg>
  ),
  DotRaster: (props: any) => (
    <svg
      fill="none"
      height={8}
      width={8}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <mask
        height={8}
        id="a"
        maskUnits="userSpaceOnUse"
        style={{
          maskType: 'alpha',
        }}
        width={8}
        x={0}
        y={0}
      >
        <circle cx={4} cy={4} fill="#D9D9D9" r={4} />
      </mask>
      <g fill="currentColor" mask="url(#a)">
        <path d="m4.58-1.398.717.698-6.28 6.447-.717-.698zM7.27-.072l.716.698L.45 8.363l-.716-.698zM9.962 1.255l.717.698-8.045 8.258-.717-.698z" />
      </g>
    </svg>
  ),
  Fence: MdFence,
  Refresh: MdRefresh,
  Currency: MdAttachMoney,
  Inventory2: MdInventory2,
  Person: MdPerson,
  Peolple: MdPeople,
  Notifications: MdOutlineNotificationsNone,
  ChevronDown: MdExpandMore,
  ChevronUp: MdExpandLess,
  TrendingUp: MdTrendingUp,
  TrendingDown: MdTrendingDown,
  Category: MdOutlineCategory,
  Visibility: MdOutlineVisibility,
  Face: MdOutlineFace,
  MoreHoriz: MdMoreHoriz,
  Pdf: MdPictureAsPdf,
  DriveFileMove: MdDriveFileMove,
  Enter: MdSubdirectoryArrowLeft,
  FolderSpecial: MdFolderSpecial,
  Topic: MdTopic,
  BrokenImage: MdOutlineBrokenImage,
  Description: MdDescription,
  FolderZip: MdFolderZip,
  ChevronRight: MdChevronRight,
  ChevronLeft: MdChevronLeft,
  ArrowLeft: MdArrowLeft,
  ArrowRight: MdArrowRight,
  ArrowDown: MdOutlineArrowDownward,
  ArrowUp: MdArrowUpward,
  ArrowBack: MdArrowBack,
  KeyboardArrowDown: MdKeyboardArrowDown,
  KeyboardArrowUp: MdKeyboardArrowUp,
  KeyboardArrowLeft: MdKeyboardArrowLeft,
  KeyboardArrowRight: MdKeyboardArrowRight,
  ArrowForward: MdOutlineArrowForward,
  Folder: MdFolder,
  FileUpload: MdOutlineUploadFile,
  Search: MdSearch,
  CreateNewFolder: MdOutlineCreateNewFolder,
  Error: MdErrorOutline,
  OpenInFull: MdOutlineOpenInFull,
  FileDownload: MdOutlineFileDownload,
  Image: MdOutlineInsertPhoto,
  Security: MdSecurity,
  AI: MdAutoAwesome,
  AIOutline: MdOutlineAutoAwesome,
  Tracker: MdOutlineTimer,
  WorkInProgress: MdOutlineHandyman,
  Add: MdAdd,
  DashboardCustomize: MdOutlineDashboardCustomize,
  Copy: MdOutlineContentCopy,
  InboxEmpty: MdOutlineMoveToInbox,
  Share: MdIosShare,
  Cancel: MdOutlineCancel,
  Pending: MdOutlineHourglassTop,
  Play: MdPlayArrow,
  PlayOutline: MdOutlinePlayArrow,
  Pause: MdPause,
  PauseOutline: MdOutlinePause,
  PlayCircle: MdPlayCircle,
  PauseCircle: MdPauseCircle,
  MoreVertical: MdOutlineMoreVert,
  ExitToApp: MdOutlineExitToApp,
  Match: MdOutlineTask,
  Email: MdOutlineEmail,
  QuestionAnswer: MdOutlineQuestionAnswer,
  Click: MdSignalCellularAlt,
  Tune: MdOutlineTune,
  Change: MdChangeHistory,
  Forwarded: MdOutlineForwardToInbox,
  Delete: MdOutlineDelete,
  FolderImports: MdRuleFolder,
  FolderTransactions: MdTopic,
  Calendar: MdEditCalendar,
  CalendarMonth: MdOutlineCalendarMonth,
  Reply: MdReplay,
  Sort: MdSort,
  Backspace: MdOutlineBackspace,
  Palette: MdOutlinePalette,
  Subject: MdOutlineSubject,
  ChatBubble: MdOutlineChatBubbleOutline,
  Menu: MdMenu,
  Mute: MdOutlineVolumeOff,
  UnMute: MdOutlineVolumeUp,
  Clear: MdOutlineClear,
  Filter: MdOutlineFilterList,
  Status: MdOutlineStyle,
  Attachments: MdOutlineAttachFile,
  Accounts: MdOutlineAccountBalance,
  Categories: MdOutlineCategory,
  ArrowRightAlt: MdArrowRightAlt,
  AccountCircle: MdOutlineAccountCircle,
  Repeat: MdOutlineRepeat,
};
