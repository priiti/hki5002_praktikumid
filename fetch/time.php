<?php

echo json_encode(date("d.m.Y H:i:s"));

if ($_REQUEST['firstname'] && $_REQUEST['lastname']) {
	echo json_encode("Tere " . $_REQUEST['firstname'] . " " . $_REQUEST['lastname'] . "!");
}