<?php

namespace App\Http\Controllers;

use App\Models\Notepad;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class NotepadController extends Controller
{
    //

    public function list(){
        $array = ['notes'=>''];

        $notes = Notepad::all()->count();

        if($notes > 0){
            $notes = Notepad::all();
            $array['notes'] = $notes;
        }else{
            $array['error'] = 'Não há anotações para exibir';
        }

        return $array;
    }

    public function newnote(Request $r){
        $array = ['note'=>''];

        $validator = Validator::make($r->all(),[
            'title' =>'required'
        ],[
            'title.required' => 'É necessário um título para iniciar uma anotação'
        ]);

        if(!$validator->fails()){
            $title = $r->input('title');
            $body = $r->input('body');
            $bgcolor = $r->input('bgcolor');
            $fontcolor = $r->input('fontcolor');

            $note = new Notepad();
            $note->title = $title;
            $note->body = $body;

            if($bgcolor){
                $note->bgcolor = $bgcolor;
            }

            if($fontcolor){
                $note->fontcolor = $fontcolor;
            }

            $note->save();

            $array['note'] = $note;
            $array['success'] = 'Anotação criada com sucesso';
        }else{
            $array['error'] = $validator->errors()->first();
        }

        return $array;
    }

    public function updatenote($id, Request $r){
        $array = ['note'=>''];

        $note = Notepad::find($id);

        if(!empty($note)){
            $note->title = $r->input('title');

            if($r->input('body')){
                $note->body = $r->input('body');
            }

            if($r->input('bgcolor')){
                $note->bgcolor = $r->input('bgcolor');
            }

            if($r->input('fontcolor')){
                $note->fontcolor = $r->input('fontcolor');
            }

            $note->save();

            $array['note'] = $note;
        }else{
            $array['error'] = 'Anotação inexistente';
        }


        return $array;
    }

    public function deletenote($id){
        $array = ['note'=>''];

        $note = Notepad::find($id);

        if(!empty($note)){
            $note->delete();
            $array['success'] = 'Anotação deletada';
        }else{
            $array['error'] = 'Anotação inexistente';
        }

        return $array;
    }
}
