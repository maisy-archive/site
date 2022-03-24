import { PageRoute } from "../def";
import Header from "../components/Header";

const gifUrls = [
    "//c.tenor.com/MA2rJEKr_IEAAAAC/milk-cat-car.gif",
    "//c.tenor.com/AimptPv3QIsAAAAC/get-real-get-real-potaro.gif",
    "//c.tenor.com/Rlj-7QD5YiQAAAAC/shower-duolingo.gif",
    "//c.tenor.com/NGMujVjZ7IcAAAAd/hosting-mexico-registro-de-dominios-mexico.gif",
    "//c.tenor.com/l3oHHAUd0rIAAAAC/squidward-tonight-glass-break.gif", 
    "//media.discordapp.net/attachments/212810886027542528/905132631342071898/RDT_20211101_0830156527447195501962361.gif",
    "//media.discordapp.net/attachments/824921608560181261/956458863178170388/IMG_8519.gif"
];

export default {
    name: "404",
    path: "/*all",
    component: () => {
        return (
            <>
                <div className="container mx-auto mt-4 text-center">
                    <Header type="h1" className="mb-4">Oops!</Header>
                    <p className="text-2xl">That route is invalid.</p>
                    <img className="mx-auto mt-4 rounded-lg" src={gifUrls[Math.floor(Math.random() * gifUrls.length)]}/>
                </div>
            </>
        );
    },
} as PageRoute;