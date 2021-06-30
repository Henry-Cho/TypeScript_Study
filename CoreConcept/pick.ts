type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
}
// 원하는 형태의 타입들만 골라주는 방법!
type VideoMeta = Pick<Video, 'title' | 'id'>;

function getVideo(id: string) : Video {
    return {
        id: id,
        title: "video",
        url: `https://`,
        data: "bited_data"
    }
}

function getVideoMeta(id: string) : VideoMeta {
    return {
        id: id,
        title: "video"
    }
}