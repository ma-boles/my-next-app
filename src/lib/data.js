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
        userId: 1
    },
    {
        id: 2,
        title: "Post 2",
        body: " veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        userId: 2
    },
    {
        id: 3,
        title: "Post 3",
        body: "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim",
        userId: 2
    },
    {
        id: 4,
        title: "Post 4",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod",
        userId: 1
    },
    {
        id: 5,
        title: "Post 5",
        body: "veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea ommodo consequat",
        userId: 2
    },
    {
        id: 6,
        title: "Post 6",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmo Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod",
        userId: 1
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