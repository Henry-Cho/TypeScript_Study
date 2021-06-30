type VideoO = {
    id: string;
    title: string;
    url: string;
    data: string;
}
// 원하는 형태의 타입들만 골라주는 방법!
type VideoMetaO = Pick<VideoO, 'title' | 'id'>;

type VideoMetaOmit = Omit<VideoO, 'title' | 'id'>;

function getVideoO(id: string) : VideoO {
    return {
        id: id,
        title: "video",
        url: `https://`,
        data: "bited_data"
    }
}

function getVideoMetaO(id: string) : VideoMetaO {
    return {
        id: id,
        title: "video"
    }
}

function getVideoMetaOmit(id: string) : VideoMetaOmit {
    return {
        url: `https://`,
        data: 'bited_data'
    }
}