import { Banner, WebSites } from "./details-footer.styles";

export const DetailsFooter = ({ details }) => {
    console.log(details);
    // const { data, isFetching } = useGetSocialStatusQuery(id);
    return (
        <Banner>
            <p>Associated websites</p>
            <WebSites>
                {details && details.length && details.map((item, idx) => (
                    <div key={idx}>
                        <a href={item.url} target="_blank" rel="noreferrer">{item.name}</a>
                    </div>
                ))}
            </WebSites>
        </Banner>
    )
}

export default DetailsFooter;