package com.example.dialogo;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);


    }
    public void salir(View view) {
        ConfirmacionDialogFragment dialogo = new ConfirmacionDialogFragment();
        dialogo.show(getFragmentManager(), "tagConfirmacion");
    }

}