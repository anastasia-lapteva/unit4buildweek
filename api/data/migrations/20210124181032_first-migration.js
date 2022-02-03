exports.up = async (knex) =>
{
    await knex.schema
        .createTable('users', (users) =>
        {
            users.increments('user_id');
            users.string('username', 200).notNullable();
            users.string('password', 200).notNullable();
            users.timestamps(false, true);
        });

    /*
    Authenticated user can Create, Update and Delete a plant object. At a minimum, each plant must have the following properties:
        id: Integer
        nickname: String
        species : String
        h2oFrequency: Type determined by implementation
        image: (optional)
    */
    await knex.schema
        .createTable('plants', (plants) =>
        {
            plants.increments('id');
            plants.string('nickname', 50).notNullable();
            plants.string('species', 100).notNullable();
            plants.string('h2oFrequency', 50).notNullable();
            plants.string('image_type', 5);
            plants.string('image', 1000000);
        });
};

exports.down = async (knex) =>
{
    await knex.schema.dropTableIfExists('plants');
    await knex.schema.dropTableIfExists('users');
};
