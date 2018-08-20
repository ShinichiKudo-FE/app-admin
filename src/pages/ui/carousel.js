import React from 'react';
import {Carousel, Card} from 'antd'
import './index.less';
export default class Carousels extends React.Component {
    
    render() {
        return (
            <div>
                <Card title="基本轮播" className="card-wrap">
                    <Carousel autoplay effect="fade">
                        <div>
                            <h1>1</h1>
                        </div>
                        <div>
                            <h1>2</h1>
                        </div>
                        <div>
                            <h1>3</h1>
                        </div>
                    </Carousel>
                    
                </Card>
                <Card title="图片轮播" className="card-wrap">
                    <Carousel autoplay>
                        <div>
                            <img src="/carousel-img/carousel-1.jpg" alt="" />
                        </div>
                        <div>
                            <img src="/carousel-img/carousel-2.jpg" alt="" />
                        </div>
                        <div>
                            <img src="/carousel-img/carousel-3.jpg" alt="" />
                        </div>
                    </Carousel>
                </Card>
            </div>
        );
    }
}
