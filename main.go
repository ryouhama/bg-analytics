package main

import (
	"fmt"
	"bg-analytics/domain/hero"
)

func main() {
	hero, _ := NewHero(1, "A・F・ケイ")

  fmt.Println(hero.Id())
  fmt.Println(hero.Name())
}

