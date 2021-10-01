import React from 'react';
import './Track.css';
import playlogo from './playButton.png';

 export class Track extends React.Component {
    constructor(props) {
        super(props);

        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
        this.previewTrack = this.previewTrack.bind(this); 
    }
    renderAction() {
        if(this.props.isRemoval) {
            return (
                <button className="Track-action" onClick={this.removeTrack}>-</button>
            )
        }else{
           return <button className="Track-action" onClick={this.addTrack}>+</button> 
        }

    }

    previewTrack() {
        if(this.props.track.preview) {
            return <button className="play-action" onClick={this.audioPreview} >
                <img alt="play button for music" src={playlogo} />
                </button>
        }
    }

    

    addTrack() {
        this.props.onAdd(this.props.track);
    }
    
    removeTrack() {
        this.props.onRemove(this.props.track);
    }

    audioPreview() {
        this.audio
      
    }

   

    

    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.track.name}  | {this.props.track.previewTrack}</h3>
                    <p>{this.props.track.artist} | {this.props.track.album}  </p>
                </div>
                {this.renderAction()}
                {this.previewTrack()}
            </div>
        )
    }
}

export default Track;