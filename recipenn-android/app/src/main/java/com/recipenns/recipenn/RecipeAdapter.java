package com.recipenns.recipenn;

import android.support.annotation.NonNull;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import java.util.List;

public class RecipeAdapter extends RecyclerView.Adapter<RecipeAdapter.MyViewHolder>{
    private List<RecipeObject> dataset;

    @NonNull
    @Override
    public RecipeAdapter.MyViewHolder onCreateViewHolder(@NonNull ViewGroup viewGroup, int i) {
        View rowItem = LayoutInflater.from(viewGroup.getContext()).inflate(R.layout.row_item, viewGroup, false);
        MyViewHolder vh = new MyViewHolder(rowItem);
        return vh;
    }

    @Override
    public void onBindViewHolder(@NonNull RecipeAdapter.MyViewHolder myViewHolder, int i) {
        myViewHolder.title.setText(dataset.get(i).getTitle());
        myViewHolder.content.setText(dataset.get(i).getIngredients());
    }

    @Override
    public int getItemCount() {
        return dataset.size();
    }

    public static class MyViewHolder extends RecyclerView.ViewHolder {
        public TextView title;
        public TextView content;

        public MyViewHolder(@NonNull View itemView) {
            super(itemView);
            title = itemView.findViewById(R.id.title);
            content = itemView.findViewById(R.id.content);
        }
    }

    public RecipeAdapter(List<RecipeObject> newDataset) {
        this.dataset = newDataset;
    }


}
