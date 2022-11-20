import Knex from "knex";

export async function seed(knex: Knex) {
    await knex("items").insert([
        { title: "Lâmpadas" },
        { title: "Pilhas e baterias" },
        { title: "Papéis e Papelão" },
        { title: "Resíduos Eletrônicos" },
        { title: "Resíduos Orgânicos" },
        { title: "Óleo de Cozinha" },
    ]);
}
