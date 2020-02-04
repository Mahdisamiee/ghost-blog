import GhostContentApi from "@tryghost/content-api";

const api = new GhostContentApi({
    url: "https://myblog.digitalpress.blog",
    key: "7bbe0a19d8c4e1060e39d1d43a",
    version:"v2"
})

export async function getPosts(){
    return await api.posts
        .browse({
            limit: "all",
            include: "tags,authors"
        })
        .catch((err) => {
            console.error(err);
        })
}

export async function getSinglePost(postSlug){
    return await api.posts
        .read({
            slug : postSlug
        })
        .catch((err) => {
            console.error(err);
        })
}