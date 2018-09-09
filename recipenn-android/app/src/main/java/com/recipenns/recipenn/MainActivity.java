package com.recipenns.recipenn;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity implements View.OnClickListener {
    private Button ingredientButton;
    private EditText ingredientName;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        ingredientButton = findViewById(R.id.ingredientButton);
        ingredientName = findViewById(R.id.ingredientName);

        ingredientButton.setOnClickListener(this);
    }

    @Override
    public void onClick(View v) {
        if (ingredientName.getText().toString().matches("")) {
            Toast.makeText(this, "You must enter an ingredient.",
                    Toast.LENGTH_SHORT).show();
            return;
        }
        Intent intent = new Intent(this, RecipeActivity.class);
        this.startActivity(intent);
    }
}
