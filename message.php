<?php 

    $data = json_decode(file_get_contents('php://input'),true);
    $content  = $data["content"];
    if($content == "ex1")
        echo ' { "message": { "text":"choice1"},
            "keyboard": {
                "type":"button",
                "button":["me1","me2","me3"]
            }
        }';

?>