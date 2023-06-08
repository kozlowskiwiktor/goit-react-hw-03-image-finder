import { Component } from "react"
import ImageGalleryItem from "./ImageGalleryItem"

export default class ImageGallery extends Component {

    state = {
        modalIsOpen: '',
        largeImageURL: ''
        Image: [],
    }
    openModal = (image: Image) => {
        this.setState({
            modalIsOpen: true,
            largeImageURL: image.largeImageURL,
        });
    }
    

    render() {
    
        return (
    <>
                <ul class="gallery">
                    {this.props.images.map((image) => {
                        return (
                            <ImageGalleryItem
                                id={image.id}
                                smallImgURL={image.webformatURL} 
largeImgURL = { image.largeImageURL }/>
                        )
                    })}
            </ul>
      </>
        )
    }
}