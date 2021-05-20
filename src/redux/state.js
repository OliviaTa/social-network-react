let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'How are you?', likesCount: 15 },
            { id: 2, message: 'It\'s my first post', likesCount: 20 }
        ]
    },
    messagesPage: {
        dialogs: [
            { id: 1, name: 'Irina', img: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png' },
            { id: 2, name: 'Alex', img: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png' },
            { id: 3, name: 'Katya', img: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png' },
            { id: 4, name: 'Masha', img: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png' },
            { id: 5, name: 'Max', img: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png' },
            { id: 6, name: 'Lenya', img: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png' }
        ],
        messages: [
            { id: 1, message: 'Hi', user: 'Alex', avatar: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png' },
            { id: 2, message: 'How are you?', user: 'Alex', avatar: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png' },
            { id: 3, message: 'Ok', user: 'Irina', avatar: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png' }
        ]
    },
    currentUser: {
        id: 1,
        name: 'Irina'
    },
    sidebar: {
        friends: [
            { id: 1, name: 'Alex', avatar: 'https://icon-library.com/images/boy-icon-png/boy-icon-png-10.jpg' },
            { id: 2, name: 'Katya', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_JUCQEffFC2faGwa5lIXi26hSUbti5rYHv5P5WN8h-vaF6xof8b1zbpbrkQRwM3xZNeU&usqp=CAU' },
            { id: 3, name: 'Max', avatar: 'https://i2.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png?fit=438%2C408&ssl=1' }
        ]
    }
};

export default state;