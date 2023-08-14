import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";


const Banner = () => {
    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>Contraxia</h1>
                    <p>
                        Buy and Sale products whatever you want
                    </p>
                    <div className="ctas">
                        <div className="banner-cta">Read More</div>
                        <div className="banner-cta v2">Shop Now</div>
                    </div>
                </div>
                <img className="banner-img" src={BannerImg} alt=""/> 
            </div>
        </div>
    );
};

export default Banner;
