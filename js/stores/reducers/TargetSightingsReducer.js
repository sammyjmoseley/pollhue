import {ADD_SIGHTING, SET_SIGHTINGS, SightingsActionType} from 'js/utils/Actions';

type TargetSightingSectionPropsType = {sightings : { [string | number]: SightingsActionType} }

export default function reducer(state = initialSightings, action) {
  switch (action.type) {
  case ADD_SIGHTING: {
    let obj = Object.assign(Object.create(initialSightings), state);
    obj.sightings[action.sighting.id] = action.sighting;
    return obj;
  }
  case SET_SIGHTINGS: {
    let sightings = action.sightings.reduce(
          (o, sighting) => {
            o[sighting.id]=sighting;
            return o;
          }, {});
    let obj = Object.create(initialSightings);
    Object.assign(obj, {sightings: sightings});
    return obj;
  }
  default:
    return state;
  }
}
