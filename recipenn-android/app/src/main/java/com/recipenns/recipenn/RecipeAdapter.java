package com.recipenns.recipenn;

import android.support.v7.widget.RecyclerView;
import android.view.View;
import android.widget.TextView;

public class RecipeAdapter extends RecyclerView.Adapter<RecipeAdapter.ViewHolder> {

    public class ViewHolder extends RecyclerView.ViewHolder {
        // each data item is just a string in this case
        public TextView titleText;
        public TextView contentText;
        public View layout;

        public ViewHolder(View v) {
            super(v);
            layout = v;
            titleText = (TextView) v.findViewById(R.id.title);
            contentText = (TextView) v.findViewById(R.id.content);
        }
    }
}
