import {profile} from "../../base/info";

const GetName = (id) => {

    let name = profile[id].name

    return (name);
}

export default GetName;