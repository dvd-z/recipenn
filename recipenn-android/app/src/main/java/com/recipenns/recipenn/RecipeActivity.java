package com.recipenns.recipenn;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;

import java.util.ArrayList;
import java.util.List;

public class RecipeActivity extends AppCompatActivity {
    private RecyclerView recyclerView;
    private RecyclerView.Adapter adapter;
    private RecyclerView.LayoutManager layoutManager;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_recipe);
        recyclerView = findViewById(R.id.recipeRecycler);

        recyclerView.setHasFixedSize(true);

        layoutManager = new LinearLayoutManager(this);
        recyclerView.setLayoutManager(layoutManager);

        List<RecipeObject> newObjects = new ArrayList<>();
        for (int i = 0; i < 10; i++) {
            RecipeObject newObject = new RecipeObject();
            newObject.setIngredients("TEST TEST INGREDIENT");
            newObject.setTitle("TEST TEST TITLE");
            newObjects.add(newObject);
        }

        adapter = new RecipeAdapter(newObjects);
        recyclerView.setAdapter(adapter);
    }
}
