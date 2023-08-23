package main

import (
	"fmt"
  "github.com/ryouhama/bg-analytics/domain/hero"
)

func main() {
	hero := Hero(1, "A・F・ケイ")

  fmt.println(hero)
  fmt.println(hero.id)
  fmt.println(hero.name)
}
