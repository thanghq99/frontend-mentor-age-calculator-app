import dayjs from 'dayjs';

export interface Person {
  avatar: string;
  name: string;
}

export type GroupStatus = 'leave' | 'join';

export type PostType = 'text' | 'image';

export interface GenericNotification {
  unread: boolean;
  person: Person;
  notificationAt: Date;
}

export interface FollowNotification extends GenericNotification {
  type: 'follow';
}

export interface ReactNotification extends GenericNotification {
  type: 'react';
  postName: string;
}

export interface GroupNotification extends GenericNotification {
  type: 'group';
  status: GroupStatus;
  groupName: string;
}

export interface PmNotification extends GenericNotification {
  type: 'pm';
  message: string;
}

export interface CommentNotification extends GenericNotification {
  type: 'comment';
  postType: PostType;
  image?: string;
}

export type Notification =
  | FollowNotification
  | ReactNotification
  | GroupNotification
  | PmNotification
  | CommentNotification;

export type NotificationType = Notification['type'];

const notifications: Notification[] = [
  {
    unread: true,
    person: {
      avatar: '/assets/images/avatar-mark-webber.webp',
      name: 'Mark Webber',
    },
    type: 'react',
    postName: 'My first tournament today!',
    notificationAt: dayjs().subtract(1, 'minute').toDate(),
  },
  {
    unread: true,
    person: {
      avatar: '/assets/images/avatar-angela-gray.webp',
      name: 'Angela Gray',
    },
    type: 'follow',
    notificationAt: dayjs().subtract(5, 'minute').toDate(),
  },
  {
    unread: true,
    person: {
      avatar: '/assets/images/avatar-jacob-thompson.webp',
      name: 'Jacob Thompson',
    },
    type: 'group',
    groupName: 'Chess Club',
    status: 'join',
    notificationAt: dayjs().subtract(1, 'day').toDate(),
  },
  {
    unread: false,
    person: {
      avatar: '/assets/images/avatar-rizky-hasanuddin.webp',
      name: 'Rizky Hasanuddin',
    },
    type: 'pm',
    message:
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    notificationAt: dayjs().subtract(5, 'day').toDate(),
  },
  {
    unread: false,
    person: {
      avatar: '/assets/images/avatar-kimberly-smith.webp',
      name: 'Kimberly Smith',
    },
    type: 'comment',
    postType: 'image',
    image: '/assets/images/image-chess.webp',
    notificationAt: dayjs().subtract(1, 'week').toDate(),
  },
  {
    unread: false,
    person: {
      avatar: '/assets/images/avatar-nathan-peterson.webp',
      name: 'Nathan Peterson',
    },
    type: 'react',
    postName: '5 end-game strategies to increase your win rate',
    notificationAt: dayjs().subtract(2, 'week').toDate(),
  },
  {
    unread: false,
    person: {
      avatar: '/assets/images/avatar-anna-kim.webp',
      name: 'Anna Kim',
    },
    type: 'group',
    status: 'leave',
    groupName: 'Chess Club',
    notificationAt: dayjs().subtract(2, 'week').toDate(),
  },
];

export default notifications;
