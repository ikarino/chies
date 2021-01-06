import React from "react"

class UpdateInfo extends React.Component {
    render() {
        const imgs = this.props.img_links.slice(0, 4).map(
            link => <a key={link} href={link}>
                <img src={link} alt="oppai" style={{width: "50%"}}/>
            </a>
        );
        let url = this.props.url.replace("http://", "").replace("https://", "")

        return <>
        <h3><a href={this.props.url}>{this.props.name}</a>@{this.props.station}</h3>
        <blockquote>
            <p>
            {this.props.keywords.map(key => <a key={key} href={`https://www.google.com/search?q=site%3A${url}+${key}`}>{key} </a>)}
            </p>
        </blockquote>
        {imgs}
        </>;
    }
}

export default UpdateInfo;