<?php
class Template 
{
   private $header;
   private $footer;

   public function addHeader($header)
   {
     $this->header = $header;
   }

   public function addFooter($footer)
   {
     $this->footer = $footer;
   }

   public function display($content,$title)
   {
     include $this->header;
     echo "<h2>" . $title . "</h2>";
     echo $content;
     include $this->footer;
   }
}