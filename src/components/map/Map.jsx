import { Col } from 'antd';
import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline} from 'react-leaflet';
import { useSelector, useDispatch } from 'react-redux';
import { currentAppSelector } from '../../selectors/currentAppSelector';
import { currentRouteSelector } from '../../selectors/currentRouteSelector';
import { getRoute } from '../../store/slices/applicationSlice';
import defineCenterCoordinates from '../../utils/functions';
import ChangeView from './ChangeView';

export default function Map() {
    const currentApplication = useSelector(currentAppSelector);
    const currentRoute = useSelector(currentRouteSelector);

    const dispatch = useDispatch();

    const [center, setCenter] = useState(['59.84660399', '30.29496392']);

    const firstWaypoint = currentApplication.fromLat && currentApplication.fromLng && [currentApplication.fromLat, currentApplication.fromLng];
    const secondWaypoint = currentApplication.toLat && currentApplication.toLng && [currentApplication.toLat, currentApplication.toLng];
    
    useEffect(() => {
        if (firstWaypoint?.length > 0 && secondWaypoint?.length > 0) {  
      const centerCoordinates = defineCenterCoordinates(firstWaypoint, secondWaypoint);
      setCenter(centerCoordinates);
      dispatch(getRoute([firstWaypoint, secondWaypoint]))
        }
    }, [currentApplication]);

    return (
        <Col flex={1} className='map__container'>
            <MapContainer center={center} zoom={13} scrollWheelZoom={true}>
                {firstWaypoint ? <ChangeView center={center} markers={[firstWaypoint, secondWaypoint]}/> : null}
                <TileLayer
                    url='https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png'
                    maxZoom='13'
                    attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
                />
                {firstWaypoint ? (<Marker position={firstWaypoint}>
                    <Popup>
                        Начало маршрута
                    </Popup>
                </Marker>) : null}
                {secondWaypoint
                    ? (<Marker position={secondWaypoint}>
                        <Popup>
                            Конец маршрута
                        </Popup>
                    </Marker>) : null}
                {currentRoute?.length > 0 ? <Polyline positions={currentRoute} /> : null}
            </MapContainer>
        </Col>
    )
}

