import { GQLitObject } from '../../../../../src';

export const Vehicle = GQLitObject('Vehicle', t => {
  t.description('A single transport craft that does not have hyperdrive capability');
  t.string('name', {
    description: `The name of this vehicle. The common name, such as "Sand Crawler" or "Speeder
    bike".`,
  });
  t.string('model', {
    description: `The model or official name of this vehicle. Such as "All-Terrain Attack
    Transport".`,
  });
  t.string('vehicleClass', {
    property: 'vehicle_class',
    description: 'The class of this vehicle, such as "Wheeled" or "Repulsorcraft".',
  });
  t.list('manufacturers', 'String', {
    // resolve: () => {},
    description: 'The manufacturers of this vehicle.',
  });
});
