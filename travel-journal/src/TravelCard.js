import React from 'react';
import LocationOn from '@mui/icons-material/LocationOn'
export default function TravelCard(props){
    return(
        <div className='Card'>
            <div className='image'>
                <img src={props.imageUrl}/>
            </div>
            <div className='text'>
            <div className='locationDetails'>
            <LocationOn fontSize="inherit" className="LocationOn"/><span className='location'>{props.location.toUpperCase()}</span><span className='googlemaps'><a>View on Google Maps</a></span>      
            </div>
            <span className='title'>{props.title}</span>
            <span className='Date'>{props.startDate} - {props.endDate}</span>
            <span className='description'>{props.description}</span>
            </div>
        </div>
    )
}