const users = [
    {
        id:1,
        name: "John"
    },
    {
        id: 2,
        name: "Jane"
    }
]

const posts = [
    {
        id: 1,
        title: "Post 1",
        body: "veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        userId: 1,
        date: "01.30.2012",
        image: "/pexels-afta-putta-gunawan-683039.jpg"
    },
    {
        id: 2,
        title: "Post 2",
        body: " veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        userId: 2,
        date: "05.27.2000",
        image: "/pexels-darya-sannikova-2938205.jpg"
    },
    {
        id: 3,
        title: "Post 3",
        body: "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
        userId: 2,
        date: "08.29.2010",
        image: "/pexels-erik-mclean-12654949.jpg"
    },
    {
        id: 4,
        title: "Post 4",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod",
        userId: 1,
        date: "12.07.1992",
        image: "/pexels-harrison-haines-3536274.jpg"
    },
    {
        id: 5,
        title: "Post 5",
        body: "veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea ommodo consequat",
        userId: 2,
        date: "07.17.1999",
        image: "/pexels-josh-kobayashi-4083586.jpg"
    },
    {
        id: 6,
        title: "Post 6",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmo Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod",
        userId: 1,
        date: "09.24.2003",
        image: "/pexels-kevin-bidwell-3863791.jpg"
    },
]

export const getPosts =  async () => {
    return posts;
};

export const getPost = async (id) => {
    return posts.find((post) => post.id === id);
}

export const getUser = async (id) => {
    return users.find((user) => user.id === id);
}