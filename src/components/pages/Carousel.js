import Carousel from 'react-bootstrap/Carousel';
import image from '../pages/banner1.jpg';
import image2 from '../pages/banner2.jpg';


export default function Carouse(){
        return(
            <div className='carousel'>
                <Carousel>
            <Carousel.Item interval="1000">
                <img src={"https://www.tasteofhome.com/wp-content/uploads/2019/11/sugar-shutterstock_615908132.jpg?fit=700%2C800"} width={500} height={400} class="d-block w-100"/>
            </Carousel.Item>
            <Carousel.Item interval="1000">
                <img src={"https://5.imimg.com/data5/VU/FW/MY-17256771/toor-dal-500x500.jpg"} width={500} height={400} class="d-block w-100"/>
            </Carousel.Item>
            <Carousel.Item interval="1000">
                <img  src={"https://bsmedia.business-standard.com/_media/bs/img/article/2020-06/23/full/1592930989-6712.jpg?im=FeatureCrop,size=(382,233)"} alt='food' width={500} height={400} class="d-block w-100"/>
            </Carousel.Item>
            </Carousel>
            </div>
        );
}