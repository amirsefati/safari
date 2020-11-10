<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('files', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('desc')->nullable();
            $table->string('axis');

            $table->text('kind')->nullable();

            $table->text('files')->nullable();

            $table->string('status')->nullable();
            $table->string('etc')->nullable();
            $table->string('etc1')->nullable();

            $table->timestamps();
        });

        Schema::create('file_user' , function (Blueprint $table){
            $table->unsignedBigInteger('file_id');
            $table->unsignedBigInteger('user_id');

            $table->foreign('file_id')->references('id')->on('files')->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('files');
    }
}
