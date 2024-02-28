import { Migration } from '../../umzugMigration';

export const up: Migration = async ({
  context: sequelize,
}: {
  context: any;
}): Promise<void> => {
  await sequelize.getQueryInterface().addConstraint('hosts', {
    fields: ['user_id'],
    type: 'foreign key',
    name: 'host_id',
    references: {
      table: 'users',
      field: 'id',
    },
    onDelete: 'cascade',
    onUpdate: 'cascade',
  });

  await sequelize.getQueryInterface().addConstraint('guests', {
    fields: ['user_id'],
    type: 'foreign key',
    name: 'guest_id',
    references: {
      table: 'users',
      field: 'id',
    },
    onDelete: 'cascade',
    onUpdate: 'cascade',
  });

  await sequelize.getQueryInterface().addConstraint('property_listing', {
    fields: ['host_id'],
    type: 'foreign key',
    name: 'host',
    references: {
      table: 'hosts',
      field: 'id',
    },
    onDelete: 'cascade',
    onUpdate: 'cascade',
  });
  await sequelize.getQueryInterface().addConstraint('booking', {
    fields: ['guest_id'],
    type: 'foreign key',
    name: 'guest',
    references: {
      table: 'guests',
      field: 'id',
    },
    onDelete: 'cascade',
    onUpdate: 'cascade',
  });

  await sequelize.getQueryInterface().addConstraint('booking', {
    fields: ['property_id'],
    type: 'foreign key',
    name: 'booking_PID',
    references: {
      table: 'property_listing',
      field: 'id',
    },
    onDelete: 'cascade',
    onUpdate: 'cascade',
  });

  await sequelize.getQueryInterface().addConstraint('discount', {
    fields: ['property_id'],
    type: 'foreign key',
    name: 'discount_PID',
    references: {
      table: 'property_listing',
      field: 'id',
    },
    onDelete: 'cascade',
    onUpdate: 'cascade',
  });

  await sequelize.getQueryInterface().addConstraint('services_offered', {
    fields: ['property_id'],
    type: 'foreign key',
    name: 'services_PID',
    references: {
      table: 'property_listing',
      field: 'id',
    },
    onDelete: 'cascade',
    onUpdate: 'cascade',
  });

  await sequelize.getQueryInterface().addConstraint('property_rules', {
    fields: ['property_id'],
    type: 'foreign key',
    name: 'rules_PID',
    references: {
      table: 'property_listing',
      field: 'id',
    },
    onDelete: 'cascade',
    onUpdate: 'cascade',
  });

  await sequelize.getQueryInterface().addConstraint('property_photos', {
    fields: ['property_id'],
    type: 'foreign key',
    name: 'photos_PID',
    references: {
      table: 'property_listing',
      field: 'id',
    },
    onDelete: 'cascade',
    onUpdate: 'cascade',
  });

  await sequelize.getQueryInterface().addConstraint('property_reviews', {
    fields: ['property_id'],
    type: 'foreign key',
    name: 'review_PID',
    references: {
      table: 'property_listing',
      field: 'id',
    },
    onDelete: 'cascade',
    onUpdate: 'cascade',
  });

  await sequelize.getQueryInterface().addConstraint('property_reviews', {
    fields: ['guest_id'],
    type: 'foreign key',
    name: 'review_guest_id',
    references: {
      table: 'guests',
      field: 'id',
    },
    onDelete: 'cascade',
    onUpdate: 'cascade',
  });
};
export const down: Migration = async ({
  context: sequelize,
}: {
  context: any;
}): Promise<void> => {
  await sequelize.getQueryInterface().removeConstraint('hosts', 'host_id');
  await sequelize.getQueryInterface().removeConstraint('guests', 'guest_id');
  await sequelize
    .getQueryInterface()
    .removeConstraint('property_listing', 'host');
  await sequelize.getQueryInterface().removeConstraint('booking', 'guest');
  await sequelize
    .getQueryInterface()
    .removeConstraint('booking', 'booking_PID');
  await sequelize
    .getQueryInterface()
    .removeConstraint('discount', 'discount_PID');
  await sequelize
    .getQueryInterface()
    .removeConstraint('services_offered', 'services_PID');
  await sequelize
    .getQueryInterface()
    .removeConstraint('property_photos', 'photos_PID');
  await sequelize
    .getQueryInterface()
    .removeConstraint('property_rules', 'rules_PID');
  await sequelize
    .getQueryInterface()
    .removeConstraint('property_reviews', 'review_PID');
  await sequelize
    .getQueryInterface()
    .removeConstraint('property_reviews', 'review_guest_id');
};
